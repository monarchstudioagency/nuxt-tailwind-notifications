<template>

  <div>

    <notificationGroup group="success">
      <div aria-live="assertive" class="fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end z-20">
        <div class="max-w-sm w-full">
          <notification v-slot="{notifications}">
            <div class="mb-4 max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
                 v-for="notification in notifications"
                 :key="notification.id">
              <div class="p-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <hero-outline-check-circle class="h-6 w-6 stroke-green-400"/>
                  </div>
                  <div class="ml-3 w-0 flex-1 pt-0.5">
                    <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
                    <p class="mt-1 text-sm text-gray-500" v-if="notification.text">{{ notification.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>

    <notificationGroup group="error">
      <div aria-live="assertive" class="fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end z-20">
        <div class="max-w-sm w-full">
          <notification v-slot="{notifications}">
            <div class="mb-4 max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
                 v-for="notification in notifications"
                 :key="notification.id">
              <div class="p-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <hero-outline-x-circle class="h-6 w-6 stroke-red-400"/>
                  </div>
                  <div class="ml-3 w-0 flex-1 pt-0.5">
                    <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
                    <p class="mt-1 text-sm text-gray-500" v-if="notification.text">{{ notification.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>

    <notificationGroup group="warning">
      <div aria-live="assertive" class="fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end z-20">
        <div class="max-w-sm w-full">
          <notification v-slot="{notifications}">
            <div class="mb-4 max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
                 v-for="notification in notifications"
                 :key="notification.id">
              <div class="p-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <hero-outline-exclamation-circle class="h-6 w-6 text-yellow-500"/>
                  </div>
                  <div class="ml-3 w-0 flex-1 pt-0.5">
                    <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
                    <p class="mt-1 text-sm text-gray-500" v-if="notification.text">{{ notification.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>

    <notificationGroup group="info">
      <div aria-live="assertive" class="fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end z-20">
        <div class="max-w-sm w-full">
          <notification v-slot="{notifications}">
            <div class="mb-4 max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
                 v-for="notification in notifications"
                 :key="notification.id">
              <div class="p-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <hero-outline-information-circle class="h-6 w-6 text-indigo-500"/>
                  </div>
                  <div class="ml-3 w-0 flex-1 pt-0.5">
                    <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
                    <p class="mt-1 text-sm text-gray-500" v-if="notification.text">{{ notification.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>

  </div>

</template>

<script>
export default {
  name: "Notifications"
}
</script>
