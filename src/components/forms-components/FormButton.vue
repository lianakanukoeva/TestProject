<template>
    <button class="px-4 py-2 text-white rounded-md">
        {{ order_title }}
    </button>
</template>

<script>

export default {
    props: {
        order_title: String
    }
}
</script>