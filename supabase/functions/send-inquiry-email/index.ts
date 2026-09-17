import { createClient } from 'npm:@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const body = await req.json();
    const record = body.record || body;

    const {
      name,
      phone,
      email,
      service_category,
      project_size,
      project_details,
      created_at,
    } = record;

    const subject = `New Project Inquiry from ${name} — F&G Industrial Website`;
    const emailBody = [
      `New project inquiry submitted via the F&G Industrial website.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service Category: ${service_category}`,
      `Project Size: ${project_size || 'Not specified'}`,
      `Project Details: ${project_details || 'Not specified'}`,
      `Submitted: ${created_at || new Date().toISOString()}`,
      ``,
      `Please follow up with the customer within 24 hours.`,
    ].join('\n');

    // Insert into Supabase auth.users is not needed.
    // Use Resend email service if configured, otherwise log.
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

    if (RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'F&G Industrial Website <onboarding@resend.dev>',
          to: 'fngindustrial@gmail.com',
          subject,
          text: emailBody,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error('Resend API error:', errText);
      }
    } else {
      console.log('=== NEW INQUIRY NOTIFICATION ===');
      console.log(emailBody);
      console.log('=================================');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Notification processed' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Edge function error:', err);
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
