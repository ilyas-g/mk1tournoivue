import { ref, onMounted, onUnmounted } from 'vue';
const  useDimension=()=> {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);
  const handleResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }
  onMounted(()=> window.addEventListener('resize', handleResize))
  onUnmounted(()=> window.removeEventListener('resize', handleResize)) 
  return {width,height}
};
export default useDimension;
