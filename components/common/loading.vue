<template>
  <div class="flex items-center justify-center w-full h-full">
    <div
      class="inner h-[80px] w-[80px] border-[3px] border-solid border-transparent border-t-[#3498db] rounded-full flex"
    />
  </div>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.inner {
  animation: spin 2s linear infinite;
}
.inner::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #e74c3c;
  animation: spin 3s linear infinite;
}
.inner::after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #f9c922;
  animation: spin 1.5s linear infinite;
}
</style>
