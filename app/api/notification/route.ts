import { NextRequest } from "next/server"
// Alias the imported function to avoid potential naming conflicts.
import { sendNotification as pushSendNotification } from "app/notifications/NotificationSender"

export async function POST(req: NextRequest) {

   let { subscription, title, message } = await req.json()
   // Okay, actually. Just ignore the Eslint errors bruh, we working on a way to make this go away

   // If subscription is a string, try to parse it into an object
   if (typeof subscription === "string") {
      try {
         subscription = JSON.parse(subscription)
      } catch (error) {
         return new Response(JSON.stringify({ error: "Invalid subscription JSON format." }), { status: 400 })
      }
   }

   // Validate that the subscription object has the necessary properties
   if (!subscription || !subscription.endpoint || !subscription.keys) {
      return new Response(JSON.stringify({ error: "Malformed subscription object." }), { status: 400 })
   }

   // Sanitize subscription: build a new object containing only the expected properties.
   const cleanSubscription = {
      endpoint: subscription.endpoint,
      keys: subscription.keys
   }

   try {
      // Use the aliased function to send notification
      await pushSendNotification(cleanSubscription, title, message)
      return new Response(JSON.stringify({ message: "Push sent." }), { status: 200 })
   } catch (error) {
      console.error("Error sending push notification:", error)
      return new Response(JSON.stringify({ error: "Failed to send push notification." }), { status: 500 })
   }
}