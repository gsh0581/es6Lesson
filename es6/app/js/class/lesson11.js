{
    //map-set 与数组和对象的比较
    let map = new Map();
    let array =[];

    //增
    map.set('t',1);
    array.push({t:1});
  //  console.info('map-array',map,array);

    //查
    let map_exist = map.has('t');
    let array_exist = array.find(item=>item.t);
  //  console.info('map-array',map_exist,array_exist);
    //改
    map.set('t',2);
    array.forEach(item=>item.t?item.t= 3:'');
   // console.info('map-array-modify',map,array);

    //删
    map.delete('t');
    let index = array.findIndex(item=>item.t);
    array.splice(index,1);
   // console.info('map-array-delete',map,array);
}
{
    // set和array的区别
    let set = new Set();
    let array = [];
    //增
    set.add({t:1});
    array.push({t:1});
    console.info('set-array',set,array);

    //查
    let set_exist =  set.has({t:1});
    let array_exist = array.find(item=>item.t);
    console.info('set-array',set_exist,array_exist);
    //改
    set.forEach(item=>item.t?item.t = 2:''); 
    array.forEach(item=>item.t?item.t= 3:'');
    console.info('set-array-modify',set,array);

    //删
    set.forEach(item=>item.t?set.delete(item):'');
    let index = array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('set-array-empty',set,array);
}
{
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj ={};

    //增
    map.set('t',1);
    set.add(item);
    obj['t'] =1;
    console.info('map-set-obj',obj,map,set);
    //查
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    })
    //改
    map.set('t',2);
    item.t= 2;
    obj['t'] = 2;

    //删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('map-set-obj',obj,map,set);
  
}
  //能使用map不使用数组
    //考虑数据唯一性使用set，放弃使用object 和array