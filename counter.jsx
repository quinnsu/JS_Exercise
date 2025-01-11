// 手写计数器，大于100出现弹窗

const { useState, useEffect } = require("react");

const Counter = () => {
  const [count, setCount] = useState(0);
  //useEffect解决
  useEffect(() => {
    if (count > 100) {
      alert("大于100了！");
    }
  }, [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  // setCount回调函数解决
  handleIncrease2 = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount > 100) {
        alert("大于100了！");
      }
      return newCount;
    });
  };

  return (
    <div>
      <h1>计数器: {count}</h1>
      <button onClick={handleIncrease}>增加</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        减少
      </button>
    </div>
  );
};

module.exports = Counter;
