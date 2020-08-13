import tailwind from '@theme-ui/preset-tailwind'
import { merge } from "theme-ui"

export default merge( 
  tailwind,
  {
    colors: {
      background: "#fafeff",
    },
    sizes: {
      sidebar: 256,
    },
    layout: {
      header: {
        color: 'white',
        bg: 'black',
        height: '4em'
      },
      footer: {
        bg: 'gray',
      },
    },
  }
)
