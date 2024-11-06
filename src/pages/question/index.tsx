import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro from '@tarojs/taro';
import { AtButton, AtRadio } from "taro-ui";
import "taro-ui/dist/style/components/radio.scss";
import "taro-ui/dist/style/components/icon.scss";
import "./index.scss";



// 问题数据
import question from "../../data/question.json"

export default () => {
  // 对应索引 === 当前序号
  const [current, setCurrent] = useState(1)
  // 当前问题
  const [currentQuestion, setCurrentQuestion] = useState(question[0]);
  // 问题单选
  const [currentAnswer, setCurrentAnswer] = useState([]);

  // 答案列表
  const [answerList] = useState([]);

  const radioOptions = currentQuestion.options.map((item) => {
    return {
      label: `${item.key}、${item.value}`,
      value: item.key,
    }
  });

  // 单选事件处理
  const handleChange = (value: never) => {
    console.log(value);
    setCurrentAnswer(value)
    answerList[current - 1] = value
  };

  useEffect(() => {
    setCurrentQuestion(question[current - 1])
    setCurrentAnswer(answerList[current - 1])
  }, [current, answerList])
  return (
    <View className="question">
      <View className="at-article__h1 title_center">{`${current}、${currentQuestion.title}`}</View>
      <AtRadio
        options={radioOptions}
        value={currentAnswer}
        onClick={handleChange}
      />
      {
        current !== 1 && <AtButton type="secondary" circle onClick={() => {
          setCurrent(current - 1)
        }} disabled={!currentAnswer}
        >
          上一题
        </AtButton>
      }
      {
        current < question.length && <AtButton type="primary" circle onClick={() => {
          setCurrent(current + 1)
        }} disabled={!currentAnswer}
        >
          下一题
        </AtButton>
      }
      {
        current === question.length && <AtButton type="primary" circle onClick={
          () => {
            Taro.showToast({
              title: `${answerList}`,
              icon: 'success',
              duration: 2000
            })
            console.log(currentAnswer, "currentAnswer");
            // Taro.navigateTo({ url: '/pages/result/index' })
          }}
        >
          查看结果
        </AtButton>
      }
    </View>
  );
};
