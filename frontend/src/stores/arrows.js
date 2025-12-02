import {defineStore} from 'pinia';

function loadFromStorage() {
    try {
        const raw = localStorage.getItem('arrows');
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function saveToStorage(arrows) {
    localStorage.setItem('arrows', JSON.stringify(arrows));
}

export const useArrowsStore = defineStore('arrows', {
state: () => ({
    section: 'red',
    arrows: {
        'red':[
        { id:'1', player:'ABCD'},
        { id:'2', player:'ABCD'},
        { id:'3', player:'ABCD'},
        { id:'4', player:'ABCD'},
        { id:'5', player:'ABCD'},
        { id:'6', player:'ABCD'},
        { id:'7', player:'ABCD'},
        { id:'8', player:'ABCD'},
        { id:'9', player:'ABCD'},
        { id:'10', player:'ABCD'},
        { id:'11', player:'ABCD'},
        { id:'12', player:'ABCD'}
    ],
        'white':[
        { id:'13', player:'ABCD'},
        { id:'14', player:'ABCD'},
        { id:'15', player:'ABCD'},
        { id:'16', player:'ABCD'},
        { id:'17', player:'ABCD'},
    ]},
}),
getters: {
    count: (state) => state.arrows[state.section].length,
    target: (state) => state.section.trim()
},
actions: {
    init(target) {
        this.section = target.trim().toLowerCase()
        if (this.arrows.length === 0) {
            this.arrows = loadFromStorage();
        }
    },

    add(id, player) {
        const arrow = {
            id: String(id || ''). trim(),
            player: String(player || ''). trim(),
        };

        this.arrows.push(arrow);
        saveToStorage(this.arrows)
    },

    remove(id) {
        const idx = this.arrows[this.section].findIndex((e) => e.id === id);
        if (idx !== -1) {
            this.arrows[this.section].splice(idx, 1);
            saveToStorage(this.arrows);          
        }
    }
},
});