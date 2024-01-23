import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-web";
import starAnimationData from '../../assets/star.json';
import buttonAnimationData from '../../assets/button (1).json';
import barAnimationData from '../../assets/bar (1).json';
import micAnimationData from '../../assets/mic.json';
import loadAnimationData from '../../assets/loading (1).json';
import textAnimationData from '../../assets/creativity_ani.json';
import chat1AnimationData from '../../assets/chat1.json';
import chat2AnimationData from '../../assets/chat2.json';




export default function Boke() {
  const navigate = useNavigate();
  const starAnimationContainer = useRef(null); // 创建一个 ref 来引用动画容器
  const buttonAnimationContainer = useRef(null); // 创建一个新的 ref 用于按钮动画
  const loadAnimationContainer = useRef(null); // 创建一个新的 ref 用于按钮动画
  const barAnimationContainer = useRef(null); // 创建一个新的 ref 用于按钮动画
  const textAnimationContainer = useRef(null); // 创建一个新的 ref 用于按钮动画
  const micAnimationContainer = useRef(null); // 创建一个新的 ref 用于按钮动画
  const chat1AnimationContainer = useRef(null); // 创建一个新的 ref 用于按钮动画
  const chat2AnimationContainer = useRef(null); // 创建一个新的 ref 用于按钮动画

  useEffect(() => {
    // 在组件加载后初始化 Lottie 动画
    if (starAnimationContainer.current) {
      const anim = Lottie.loadAnimation({
        container: starAnimationContainer.current, // 指定容器
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: starAnimationData,// 路径到你的 star.json 文件
      });  
    }
      // 在组件加载后初始化 Lottie 动画
      if (buttonAnimationContainer.current) {
        const buttonanim = Lottie.loadAnimation({
          container: buttonAnimationContainer.current, // 指定按钮动画容器
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: buttonAnimationData, // 正确的动画文件路径
        });
      }
      if (loadAnimationContainer.current) {
        const loadanim = Lottie.loadAnimation({
          container: loadAnimationContainer.current, // 指定按钮动画容器
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: loadAnimationData, // 正确的动画文件路径
        });
      }
      if (barAnimationContainer.current) {
        const baranim = Lottie.loadAnimation({
          container: barAnimationContainer.current, // 指定按钮动画容器
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: barAnimationData, // 正确的动画文件路径
        });
      }
      if (textAnimationContainer.current) {
        const textanim = Lottie.loadAnimation({
          container: textAnimationContainer.current, // 指定按钮动画容器
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: textAnimationData, // 正确的动画文件路径
        });
      }
      if (micAnimationContainer.current) {
        const micanim = Lottie.loadAnimation({
          container: micAnimationContainer.current, // 指定按钮动画容器
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: micAnimationData, // 正确的动画文件路径
        });
      }
      if (chat1AnimationContainer.current) {
        const chat1anim = Lottie.loadAnimation({
          container: chat1AnimationContainer.current, // 指定按钮动画容器
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: chat1AnimationData, // 正确的动画文件路径
        });
      }
      if (chat2AnimationContainer.current) {
        const chat2anim = Lottie.loadAnimation({
          container: chat2AnimationContainer.current, // 指定按钮动画容器
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: chat2AnimationData, // 正确的动画文件路径
        });
      }
  
  }, []); // 空数组确保只在组件加载时运行

  return (
    <div
      style={{
        height: "100vh",
        width: 500,
        margin: "auto",
        color: "#fff",
        padding: 20,
      }}
    >
      {/*头部的文字和星星 */}
      <div
        style={{
          fontWeight: 400,
          fontSize: 30,
          fontFamily: "Krona One",
          position: "relative",
        }}
      >
      <div
            ref={textAnimationContainer}
            style={{ width: 445, height: 36 }}
          ></div>
        {/*星星 */}
        <div
          ref={starAnimationContainer}
          style={{ width: 100, position: "absolute", left: 60, top: -10 }}
          src={require("../../assets/star.png")}
        ></div>
      </div>
      <div>I don’t think visual styling could be a problem</div>
      {/*这一块是顶部的三个按钮 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          marginTop: 40,
        }}
      >
        {/*第一按钮 */}
        <div
          style={{
            backgroundColor: "#fff",
            flex: 1,
            height: 160,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/back");
          }}
        >
                    
          <div
            ref={buttonAnimationContainer}
            style={{ width: 120, height: 120 }}
          ></div>

        </div>
        {/*第二按钮 */}
        <div
          style={{
            backgroundColor: "#fff",
            flex: 1,
            height: 160,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/back");
          }}
        >
          <div
            ref={micAnimationContainer}
            style={{ width: 120, height: 120 }}
          ></div>
        </div>
        {/*第三按钮 */}
        <div
          style={{
            backgroundColor: "#fff",
            flex: 1,
            height: 160,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/back");
          }}
        >
          <div
            ref={loadAnimationContainer}
            style={{ width: 120, height: 120 }}
          ></div>
        </div>
      </div>
      {/*这一块是选项切换的按钮 */}
      <div
        style={{
          height: 124,
          border: "1px solid #fff",
          borderRadius: 100,
          display: "flex",
          alignItems: "center",
          padding: "0px 10px",
          justifyContent: "space-between",
          gap: 50,
          marginTop: 20,
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/back");
        }}
      >
        <div
            ref={barAnimationContainer}
            style={{ width: 555, height: 124 }}
        ></div>
      </div>
      {/*这一块是聊天的窗口 */}
      <div
        style={{
          backgroundColor: "#2A2741",
          marginTop: 20,
          padding: "30px 40px",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/back");
        }}
      >
          <div
            ref={chat1AnimationContainer}
            style={{ width: 400, height: 89 }}
          ></div>
        {/*第二行 */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <div
            ref={chat2AnimationContainer}
            style={{ width: 431, height: 140 }}
          ></div>
        </div>

        {/*底部的滑条 */}
        <div
          style={{
            backgroundColor: "#443F6E",
            marginTop: 20,
            height: 25,
            borderRadius: 5,
            marginLeft: 10,
          }}
        >
          <div
            style={{ background: "#565881", borderRadius: 4, width: 88 }}
          ></div>
        </div>
      </div>
      {/*底部的文字 */}
      <div
        style={{
          color: "#fff",
          marginTop: 10,
          fontSize: 13,
          paddingBottom: 10,
        }}
      >
        Lottie Practice Example
      </div>
    </div>
  );
}
