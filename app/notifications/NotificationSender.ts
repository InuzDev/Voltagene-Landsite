import type { PushSubscription } from 'web-push'
import webpush from 'web-push'

// Helper function (retained for potential use elsewhere)

// function urlBase64ToUint8Array(base64String: string): Uint8Array {
//    const padding = '='.repeat((4 - base64String.length % 4) % 4)
//    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
//    return new Uint8Array(Buffer.from(base64, 'base64'))
// }

// Ensure the environment variables are present and valid.
const vapidPublicKey = process.env.NEXT_PUBLIC_WEB_PUSH_KEY
const vapidPrivateKey = process.env.PRIVATE_KEY

if (!vapidPublicKey || !vapidPrivateKey) {
   throw new Error("Missing VAPID public or private key in environment variables.")
}

if (vapidPublicKey === "0" || vapidPrivateKey === "0") {
   throw new Error("Invalid VAPID key detected. Please check your environment configuration.")
}

// Set VAPID details directly, as web-push expects the public key as a URL-safe base64 string.
webpush.setVapidDetails(
   "https://voltagene.com/contact",
   vapidPublicKey,
   vapidPrivateKey
)

/**
 * Send a push notification using the provided subscription.
 * @param subscription - The PushSubscription object.
 * @param title - The title of the notification.
 * @param message - The message body of the notification.
 */
export const sendNotification = async (subscription: PushSubscription, title: string, message: string) => {
   const pushPayload = {
      title,
      body: message,
      icon: "/favicon.ico",
      url: "/",
      badge: "/favicon.ico"
   }

   webpush
      .sendNotification(subscription, JSON.stringify(pushPayload))
      .then(() => {
         console.log("Notification sent")
      })
      .catch((error) => {
         console.error("Error sending notification", error)
      })
}