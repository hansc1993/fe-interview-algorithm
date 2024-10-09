// 单例模式
// class Singleton {

//     static instance = null

//     constructor() {
//         if(Singleton.instance) {
//             return Singleton.instance
//         }

//         Singleton.instance = this
//     }

    

// }

// const singletonInstance = new Singleton()

// export default singletonInstance


// 观察者模式

// class Subject {
//     constructor() {
//         this.observer = []
//     }

//     addObserver(observer) {
//         this.observer.push(observer)
//     }

//     removeObserver(observer) {
//         this.observer = this.observer.fileter(v=> v !== observer)
//     }

//     notify(data) {
//         this.observer.forEach((ob)=> ob.update(data))
//     }
// }


// class Observer {
//     constructor(name) {
//         this.name = name
//     }

//     update(data) {
//         console.log(data)
//     }
// }

// // 创建被观察者实例
// const subject = new Subject();

// // 创建观察者实例
// const observer1 = new Observer('观察者1');
// const observer2 = new Observer('观察者2');

// // 添加观察者
// subject.addObserver(observer1);
// subject.addObserver(observer2);

// // 触发通知
// subject.notify('状态发生变化！'); // 观察者1 和 观察者2 收到通知


// 发布订阅模式
// class EventEmitter {
//     constructor() {
//         this.events = {}
//     }

//     on(event, listener) {
//         if(!this.events[event]) {
//             this.events[event] = []
//         }

//         this.events[event].push(listener)
//     }

//     off(event, listener) {
//         if(this.events[event]) {
//             this.events[event] = this.events[event].filter(v=> v!== listener)
//         }
//     }

//     emit(event,data) {
//         this.events[event].forEach(listener => listener(data))
//     }
// }

// // 创建调度中心实例
// const eventEmitter = new EventEmitter();

// // 订阅者A
// function subscriberA(data) {
//   console.log('订阅者A收到:', data);
// }

// // 订阅者B
// function subscriberB(data) {
//   console.log('订阅者B收到:', data);
// }

// // 订阅事件
// eventEmitter.on('message', subscriberA);
// eventEmitter.on('message', subscriberB);

// // 发布事件
// eventEmitter.emit('message', '这是一个测试消息！'); // 订阅者A和订阅者B都会收到消息

// 依赖注入和控制反转
// class Logger {
//     constructor() {

//     }

//     log(data) {
//         console.log(data)
//     }
// }

// 依赖注入容器
// class Container {
//     constructor() {
//         this.services = new Map()
//     }

//     register(name, service) {
//         this.services.set(name, service)
//     }

//     get(name) {
//         this.services.get(name)
//     }
// }

// class App {
//     constructor(logger) { // 依赖注入方式注入 Logger实例
//         this.logger = logger
//     }

//     print(data) {
//         this.logger.log(data)
//     }
// }

// const container = new Container()
// container.register('logger', new Logger())

// const app = new App(container.get('logger'))



