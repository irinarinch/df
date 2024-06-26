

// const Halls = () => {
//   return (
//     <section className="conf-step">
        
//       <header className="conf-step__header conf-step__header_opened">
//         <h2 className="conf-step__title">Управление залами</h2>
//       </header>
//       <div className="conf-step__wrapper">
//         <p className="conf-step__paragraph">Доступные залы: </p>
//         <ul className="conf-step__list">
//           <li>
//             1
//             <button type="submit" className="conf-step__button conf-step__button-trash"></button>
//           </li>
//           {/* @foreach ($halls as $hall)
//                 <li>                    
//                     <form method="POST" action="{{ route('halls.destroy', $hall) }}"  >
//                         @method('DELETE')
//                         @csrf
//                         Зал {{$hall->id}}
//                         <button type="submit" className="conf-step__button conf-step__button-trash"></button>
//                     </form>                   
//                 </li>
//             @endforeach */}
//         </ul>
//         <form method="POST" action="{{ route('halls.store') }}">
//           <button
//             type="submit"
//             className="conf-step__button conf-step__button-accent"
//           >
//             Создать зал
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Halls;
