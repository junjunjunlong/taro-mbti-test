import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import indexBg from '../../assets/indexBg.jpeg'
import Footer from '../../components/footer/index'
import './index.scss'

export default () => {
  return (
    <>
      <View className='index_page'>
        <View className='at-article__h1 title_center'>
          MBTI 性格测试
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__h3 description'>只需2分钟，就能非常准确地描述出你是谁，以及你的性格特点</View>
            <AtButton type='primary' circle onClick={() => {
              console.log(1);
            }}
            >开始测试</AtButton>
            <Image
              className='at-article__img'
              src={indexBg}
            />
          </View>
        </View>
      </View>
      <Footer />
    </>
  )
}


