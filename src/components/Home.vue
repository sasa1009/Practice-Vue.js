<template>
  <p v-border:solid.round="{width: '5px', color: 'yellow'}">Home</p>
</template>

<script>
export default {
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
    } 
  }
}
</script>