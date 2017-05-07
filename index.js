function applyFilter(value) {

    let filters = {
        uppercase: (arg) => {
            return arg.toUpperCase();
        },
        capitalize: (arg) => {
            return arg.split(' ')
                .map((value) => {
                    return value[0].toUpperCase() +
                        value
                        .split('')
                        .slice(1)
                        .join('');
                })
                .join(' ');
        }
    };
    // ['name','uppercase','lowercase']
    let items = value
        .split('|')
        .map((item) => {
            return item.trim();
        });
    // 'name'
    let subject = items[0];
    // ['uppercase','lowercase']
    let operations = items.slice(1);

    return operations.reduce((prev, next) => {
        let operation = filters[next];
        return operation(prev);
    }, subject);
}
