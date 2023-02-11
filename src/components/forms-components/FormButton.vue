<template>
    <button class="p-2 text-white rounded-md ml-5">
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