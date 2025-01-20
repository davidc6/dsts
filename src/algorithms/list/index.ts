const MAX_NUM_OF_LEVELS = 5;

// 1 heads, 2 tails
const isHeads = () => {
    return (Math.ceil(Math.random() * 2)) === 1
}

// Skip list node
export class SkipListNode {
    next: any[];

    constructor(readonly level: number, public value: number | null = null) {
        this.next = [];
    }
}

export class SkipList {
    private head: SkipListNode; // head node
    private maximumLevel: number; // maximum level
    private currentLevel: number = 0; // current level
    private listSize: number = 0; // size of this list

    constructor(maximumLevel: number = MAX_NUM_OF_LEVELS) {
        // if 0 and 5, this will be 5
        this.maximumLevel = maximumLevel;
        // head / forward links to other nodes
        this.head = new SkipListNode(this.maximumLevel);
    }

    // TODO/FIX
    _print(nodes: SkipListNode[] = this.head.next) {
        if (!nodes || !nodes.length) {
            console.log('=======================');
            return;
        }

        for (const node of nodes) {
            // if (node) {
            this._print(node.next)
            // }

            console.log('PRINT: ', node)
        }
    }

    print() {
        // this._print(this.head.next)

        // console.log(this.head);

        let cursor = this.head;

        let i = 0;

        while (cursor) {
            let first = cursor;
            first = cursor.next[i]
            // i += 1;

            while (first.next) {
                console.log(first.value)
                i += 1;
            }

            cursor
        }
    }

    /**
     * Determine the level where the value will be inserted
     * @returns number
     */
    private generateLevel() {
        let level = 1;
        while (Math.random() < 0.5 && level < this.maximumLevel) {
            level += 1;
        }
        return level;
    }

    size(): number {
        return this.listSize;
    }

    insert(value: number) {
        // This is the skip list node array that we'll be updating
        let update: SkipListNode[] = [];
        let head: SkipListNode = this.head;

        // start going down from the top level / layer
        // i.e if MAX level is 5 then 4, 3, 2, 1, 0
        // while above the 0th layer
        for (let i = this.head.level - 1; i >= 0; i--) {
            // while next 
            while (head.next[i] && head.next[i].value - value < 0) {
                // head is now next item in layer array
                head = head.next[i];
            }

            update[i] = head;
        }

        head = head.next[0]; // scoped to this function head is not set to first element

        // If exists and set to a value and subtracting it's value from value we are trying to insert is 0
        if (head && head.value && (head.value - value == 0)) { // update
            head.value = value;
            return false;
        } else { // insert
            // generate "insertion" level
            const level = this.generateLevel();

            // generated level larger than current level
            if (level > this.currentLevel) {
                // go up all levels and insert the head
                for (let i = this.currentLevel; i < level; i++) {
                    update[i] = this.head
                }

                this.currentLevel = level;
            }

            head = new SkipListNode(level, value);

            // append next items
            for (let i = 0; i < level; i++) {
                head.next[i] = update[i].next[i];
                update[i].next[i] = head;
            }

            this.listSize += 1;
            return true;
        }
    }
}
