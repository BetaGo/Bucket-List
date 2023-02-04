const ListItem = () => {
  return (
    <section className="m-auto max-w-2xl font-bold nes-container with-title">
      <div className="title">Bucket List</div>
      <div className="flex items-center my-4">
        <input type="checkbox" className="nes-checkbox" checked />
        <span className=" mr-3 text-2xl">蹦极</span>
        <a href="#" className="nes-badge is-splited">
          <span className="is-dark">澳门塔</span>
          <span className="is-primary">233米</span>
        </a>
      </div>
      <div className="flex items-center my-4">
        <input type="checkbox" className="nes-checkbox" checked={false} />
        <span className=" mr-3 text-2xl">高空跳伞</span>
      </div>
      <div className="flex items-center my-4">
        <input type="checkbox" className="nes-checkbox" checked={false} />
        <span className=" mr-3 text-2xl">潜入深海</span>
      </div>
      <div className="flex items-center my-4">
        <input type="checkbox" className="nes-checkbox" checked={false} />
        <span className=" mr-3 text-2xl">乘船在海上航行</span>
      </div>
      <div>
        <div className="flex items-center my-4">
          <input type="checkbox" className="nes-checkbox" checked={false} />
          <span className="mr-3 text-2xl">看看世界</span>
        </div>
        <div className="pl-8">
          <div className="flex items-center my-4">
            <input type="checkbox" className="nes-checkbox" checked={false} />
            <span className=" mr-3 text-2xl">日本</span>
          </div>
        </div>
        <div className="pl-8">
          <div className="flex items-center my-4">
            <input type="checkbox" className="nes-checkbox" checked={false} />
            <span className=" mr-3 text-2xl">意大利</span>
          </div>
        </div>
        <div className="pl-8">
          <div className="flex items-center my-4">
            <input type="checkbox" className="nes-checkbox" checked={false} />
            <span className=" mr-3 text-2xl">澳大利亚</span>
          </div>
        </div>
        <div className="pl-8">
          <div className="flex items-center my-4">
            <input type="checkbox" className="nes-checkbox" checked={false} />
            <span className=" mr-3 text-2xl">埃及</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListItem;
