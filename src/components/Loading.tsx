import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
  return (
    <DotLottieReact
      src="src\assets\RocketLoader.lottie"
      loop
      autoplay
      style={{ maxWidth: "300px" }}
    />
  )
}

export default Loading