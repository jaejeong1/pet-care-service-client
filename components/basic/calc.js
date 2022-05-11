import React from 'react';

export function Message ({ onIncrease, onDecrease, number }) {
  return (
    <div>
      <h1>음식</h1>
      <button onClick={onIncrease}>밥먹자</button>
      <button onClick={onDecrease}>물마시자</button>
      <button onClick={onDecrease}>간식먹자</button>
      <h1>놀이</h1>
      <button onClick={onIncrease}>앉아</button>
      <button onClick={onDecrease}>손~</button>
      <button onClick={onDecrease}>점프</button>
      <h1>감정</h1>
      <button onClick={onIncrease}>사랑해</button>
      <button onClick={onDecrease}>보고싶어</button>
      <button onClick={onDecrease}>잘놀고있어</button>
    </div>
  );
};

// export function Counter ({ onIncrease, onDecrease, number }) {
//   return (
//     <div>
//       <h1>음식</h1>
//       <button onClick={onIncrease}>밥먹자</button>
//       <button onClick={onDecrease}>물마시자</button>
//       <button onClick={onDecrease}>간식먹자</button>
//       <h1>놀이</h1>
//       <button onClick={onIncrease}>앉아</button>
//       <button onClick={onDecrease}>손~</button>
//       <button onClick={onDecrease}>점프</button>
//       <h1>감정</h1>
//       <button onClick={onIncrease}>사랑해</button>
//       <button onClick={onDecrease}>보고싶어</button>
//       <button onClick={onDecrease}>잘놀고있어</button>
//     </div>
//   );
// };

// // export function Counter ({ onIncrease, onDecrease, number }) {
// //   return (
// //     <div>
// //       <h1>음식</h1>
// //       <button onClick={onIncrease}>밥먹자</button>
// //       <button onClick={onDecrease}>물마시자</button>
// //       <button onClick={onDecrease}>간식먹자</button>
// //       <h1>놀이</h1>
// //       <button onClick={onIncrease}>앉아</button>
// //       <button onClick={onDecrease}>손~</button>
// //       <button onClick={onDecrease}>점프</button>
// //       <h1>감정</h1>
// //       <button onClick={onIncrease}>사랑해</button>
// //       <button onClick={onDecrease}>보고싶어</button>
// //       <button onClick={onDecrease}>잘놀고있어</button>
// //     </div>
// //   );
// };