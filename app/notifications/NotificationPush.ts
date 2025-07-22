// This is not a feature yet

const SERVICE_WORKER_FILE_PATH = "sw/notification-sw.js"

export function isNotificationSupported(): boolean {
   let unsupported = false
   if (
      !("serviceWorker" in navigator) ||
      !("PushManager" in window) ||
      !("showNotification" in ServiceWorkerRegistration.prototype)
   ) {
      unsupported = true
   }
   return !unsupported
}

export function isPermissionGranted(): boolean {
   return Notification.permission === "granted"
}

export function isPermissionDenied(): boolean {
   return Notification.permission === "denied"
}

export async function registerAndSubscribe(onSubscribe: (subs: PushSubscription | null) => void,
   onError: (e: Error) => void): Promise<void> {
   try {
      await navigator.serviceWorker.register(SERVICE_WORKER_FILE_PATH)
      // Subscribe to notification
      navigator.serviceWorker.ready
         .then((registration: ServiceWorkerRegistration) => {
            return registration.pushManager.subscribe({
               userVisibleOnly: true,
               applicationServerKey: process.env.NEXT_PUBLIC_WEB_PUSH_KEY,
            })
         })
         .then((subscription: PushSubscription) => {
            console.info("Created subscription object: ", subscription.toJSON())
            onSubscribe(subscription)
         })
         .catch((e) => {
            onError(e)
         })
   } catch (e: any) {
      onError(e)
   }
}