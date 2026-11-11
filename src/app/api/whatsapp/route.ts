import { getWhatsAppBusinessUrl } from '@/lib/whatsapp';

export const dynamic = 'force-static';

export function GET() {
  return Response.redirect(getWhatsAppBusinessUrl('', {
    placement: 'footer_whatsapp_qr',
    pageTitle: 'VCARPETS website (QR scan)',
    pagePath: '/',
    intent: 'request_project_quote',
  }), 307);
}
