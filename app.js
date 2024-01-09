const App = {
  data() {
    return {
      appTitle: "Список заметок:",
      myPlaceholder: "Добавьте заметку",
      inputValue: "",
      notes: [],
      newNote: "", // текст новой заметки
    };
  },

  methods: {
  
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.newNote = "";
      }
    },

    toUpperCase(item) {
      return item.toUpperCase();
    },

    deleteNote(index) {
      this.notes.splice(index, 1);
    },

  },
  computed: {
    doubleCountComp() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = '';
      }
    },
  },
};

Vue.createApp(App).mount("#app");
