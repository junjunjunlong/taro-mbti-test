import { View, } from '@tarojs/components'
import { AtButton, AtTimeline } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/timeline.scss";
import "taro-ui/dist/style/components/icon.scss";

export default () => {

  return (
    <View className='User'>
      <AtButton loading type='primary'>user</AtButton>
      <AtTimeline
        items={[
          { title: '刷牙洗脸' },
          { title: '吃早餐' },
          { title: '上班' },
          { title: '睡觉' }
        ]}
      >
      </AtTimeline>
    </View>
  )
}