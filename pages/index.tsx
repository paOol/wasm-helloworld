import dynamic from 'next/dynamic';
// import { useAsBind } from 'use-as-bind';

const WasmComponent = dynamic({
  loader: async () => {
    const wasmModule = await import('main.wasm');
    return () => <div>Adding two numbers: {wasmModule.add(1, 2)}</div>;
  }
});

const Home = () => {
  // const { loaded, instance, error } = useAsBind('example.wasm');
  // console.log('loaded', loaded);
  // console.log('instance', instance);
  // console.log('error', error);

  return (
    <div>
      <WasmComponent />
      {/*
      {loaded && instance.exports.helloWorld()}
      {error && error.message} */}
    </div>
  );
};

export default Home;
