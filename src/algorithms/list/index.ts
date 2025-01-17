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
        // while above the 0th layer
        for (let i = this.head.level - 1; i >= 0; i--) {
            while (head.next[i] && head.next[i].value - value < 0) {
                // head is now next item in layer array
                head = head.next[i];
            }

            update[i] = head;
        }

        head = head.next[0];

        if (head && head.value && (head.value - value == 0)) {
            // update
            head.value = value;
            return false;
        } else {
            // insert
            const level = this.generateLevel();

            if (level > this.currentLevel) {
                for (let i = this.currentLevel; i < level; i++) {
                    update[i] = this.head
                }
                this.currentLevel = level;
            }

            head = new SkipListNode(level, value);

            for (let i = 0; i < level; i++) {
                head.next[i] = update[i].next[i];
                update[i].next[i] = head;
            }

            this.listSize += 1;
            return true;
        }
    }
}
