<template>
    <div class="field">
        <label for="">{{ label }}</label>
        <input :type="type" :placeholder="plchold" required :name="name">
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        plchold: String,
        name: String,
        type: String
    }
}
</script>