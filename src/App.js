import Greetings from './components/Greetings';
import ItemsTopics from './components/ItemsTopics';
import data from './assets/data'

function App() {
  console.log(data);
  return (
    <main className='bg-slate-900 min-h-screen text-white'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-3 justify-center items-center min-h-screen md:space-x-36 px-8 flex-wrap'>
      <Greetings></Greetings>   
      
      <section className='w-full md:col-span-2'>
        <ul className='w-full flex flex-col gap-5'>
          {data.quizzes.map((item,index)=>(
          <ItemsTopics key={index} 
          title={item.title} 
          logo={item.icon} ></ItemsTopics>
          ))}
        </ul>
      </section>
      </div>

   
    </main>
  );
}

export default App;
