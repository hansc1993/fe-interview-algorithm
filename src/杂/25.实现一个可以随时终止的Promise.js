function cancellablePromise(executor) {
    const controller = new AbortController(); // 创建 AbortController 实例
    const { signal } = controller; // 获取 AbortSignal 实例

    const promise = new Promise((resolve, reject) => {
        // 传递 signal 到 executor
        executor(resolve, reject, signal);
    });

    return {
        promise,
        cancel: () => controller.abort() // 调用 abort 方法取消操作
    };
}