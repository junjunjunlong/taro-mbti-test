import { View, } from '@tarojs/components'
import { AtButton, AtTimeline } from 'taro-ui'

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