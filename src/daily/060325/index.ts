export function canAttendMeetings(intervals: [[number, number]]) {
    let current = null;

    // In case the intervals are not sorted,
    // we need to sort to figure out overlaps.
    intervals.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        } else {
            return 1
        }
    });

    for (const interval of intervals) {
        if (!current) {
            current = interval;
            continue;
        }

        const [start, end] = interval;

        if (start < current[1]) {
            return false;
        }

        current = interval;
    }

    return true;
}