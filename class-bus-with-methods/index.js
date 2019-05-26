class Bus {
    constructor(direction, stations, seats, passengers, last_station) {
        this.direction = direction;
        this.stations = stations;
        this.seats = seats;
        this.passengers = passengers;
        this.last_station = last_station;
    }

    current() {
        return `${this.stations[last_station]}`;
    }

    next() {
        this.last_station++;
    }

    board(count) {
        if((this.passengers + count) >= this.seats) {
            this.passengers = this.seats;
        } else {
            this.passengers += count;
        }
    }

    unboard(count) {
        if(count > this.passengers) {
            this.passengers = 0;
        } else {
            this.passengers -= count;
        }
    }
}

const autobus = new Bus('Vienna', ['Prague', 'Jihlava', 'Brno', 'Breclav', 'Vienna'], 30, 12, 1);

autobus.board(10);

autobus.unboard(15);