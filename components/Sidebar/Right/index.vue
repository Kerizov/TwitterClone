<template>
  <div class="flex flex-col">
    <!--   Preview Card : What`s happening-->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem v-for="whatsHappeningItem in whatsHappeningItems">
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ whatsHappeningItem.title }}
          </h2>
          <p class="text-xs text-gray-400">
            {{ whatsHappeningItem.count }}
          </p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!--   Preview Card : Who to follow-->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem v-for="WhoToFollowIn in WhoToFollowItems">
        <div class="flex flex-row justify-between  items-center  p-2">
          <div class="flex flex-row">
            <img
                class="w-10 h-10 object-cover rounded-full"
                :src="WhoToFollowIn.image"
                :alt="WhoToFollowIn.name">
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ WhoToFollowIn.name }}</h1>
              <p class="text-xs text-gray-400">{{ WhoToFollowIn.handle }}</p>
            </div>
          </div>
          <div class="flex h-full">
            <button class="px-4 py-2 font-bold rounded-full text-xs text-white dark:text-black bg-black dark:bg-white">Follow</button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  {
    title: 'SpaceX',
    count: '18.9 Tweets'
  },
  {
    title: '#CodingIsFun',
    count: '18.9 Tweets'
  },
  {
    title: '#FootballIsShit',
    count: '18.9 Tweets'
  },
])
const WhoToFollowItems = ref([
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg'
  },
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg'
  },
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg'
  },
])
</script>