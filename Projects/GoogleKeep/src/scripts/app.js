export class App {
  constructor() {
    this.notes = [];
    this.title = '';
    this.text = '';
    this.id = '';

    this.$form = document.querySelector('#form');
    this.$noteTitle = document.querySelector('#note-title');
    this.$noteText = document.querySelector('#note-text');
    this.$notes = document.querySelector('#notes');
    this.$formButtons = document.querySelector('#form-buttons');
    this.$placeholder = document.querySelector('#placeholder');
    this.$modal = document.querySelector('.modal');
    this.$modalTitle = document.querySelector('.modal-title');
    this.$modalText = document.querySelector('.modal-text');
    this.$modalCloseBtn = document.querySelector('.modal-close-button');
    this.$colorTooltip = document.querySelector('#color-tooltip');

    console.log('app works!');
    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener('click', (e) => {
      this.handleClick(e);
      this.selectNote(e);
      this.openModal(e);
    });
    document.body.addEventListener('mouseover', this.openToltip.bind(this));
    document.body.addEventListener('mouseout', this.closeToltip.bind(this));

    this.$colorTooltip.addEventListener('mouseover', function () {
      this.style.display = 'flex';
    });
    this.$colorTooltip.addEventListener('mouseout', function () {
      this.style.display = 'none';
    });

    this.$colorTooltip.addEventListener('click', this.handleClickTooltip.bind(this));

    this.$form.addEventListener('submit', this.handleForm.bind(this));
    this.$modalCloseBtn.addEventListener('click', this.closeModal.bind(this));
  }

  handleClick(event) {
    if (event.target.id.includes('form-close-button')) {
      this.toggleForm({ open: false });
      return;
    }

    if (this.$form.contains(event.target)) {
      this.toggleForm({ open: true });
    } else {
      this.handleForm(event);
      this.toggleForm({ open: false });
    }
  }

  handleClickTooltip({ target }) {
    const hasColorClicked = target.classList.contains('color-option');
    if (!hasColorClicked) return;

    console.log(target.closest('.note'));
    target.closest('.note');
  }

  noteEditColor(color) {
    this.notes = this.notes.map((note) =>
      note.id === Number(this.id) ? { ...note, text, title, color } : note
    );

    console.log(this.notes);
  }

  openToltip({ target }) {
    if (!target.classList.contains('toolbar-color')) return;
    this.id = target.nextElementSibling.dataset.id;
    const noteCoords = target.getBoundingClientRect();
    const horizontal = noteCoords.left + window.scrollX;
    this.$colorTooltip.style.transform = `translate(${horizontal - 20}px,-20px)`;
    this.$colorTooltip.style.display = `flex`;
  }

  closeToltip({ target }) {
    if (target.classList.contains('toolbar-color')) return;
    this.$colorTooltip.style.display = `none`;
  }

  openModal({ target }) {
    const isNoteClicked = target.closest('.note');

    if (isNoteClicked) {
      this.$modal.classList.add('open-modal');
      this.$modalText.value = this.text;
      this.$modalTitle.value = this.title;
    }
  }

  closeModal() {
    this.editNote();
    this.$modal.classList.remove('open-modal');
  }

  editNote() {
    const title = this.$modalTitle.value;
    const text = this.$modalText.value;

    this.notes = this.notes.map((note) =>
      note.id === Number(this.id) ? { ...note, text, title } : note
    );
    this.displayNotes();
    console.log(this.notes);
  }

  selectNote({ target }) {
    const selected = target.closest('.note');
    if (!selected) return;
    const [title, text] = selected.children;
    this.title = title.textContent;
    this.text = text.textContent;
    this.id = selected.dataset.id;
  }

  handleForm(e) {
    e.preventDefault();
    const inputText = this.$noteText.value;
    const inputTitle = this.$noteTitle.value;

    const hasNote = inputText || inputTitle;

    if (hasNote) this.addNote({ title: inputTitle, text: inputText });
    this.toggleForm({ open: false });
  }

  addNote({ title, text }) {
    const newNote = {
      title,
      text,
      color: 'white',
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 0,
    };
    this.notes = [...this.notes, newNote];
    console.log(this.notes);
    this.displayNotes();
  }

  displayNotes() {
    const hasNotes = this.notes.length;
    this.$placeholder.style.display = hasNotes ? 'none' : 'flex';

    this.$notes.innerHTML = this.notes
      .map(({ title, text, color, id }) => {
        return `<div style="background-color: ${color}" class="note" data-id="${id}">
                        <div class=${title && 'note-title'}>${title}</div>
                        <div class=${text && 'note-text'} >${text}</div>
                        <div class="toolbar" >
                                <span class="toolbar-color material-icons e40a">palette</span>
                                <span class="toolbar-delete material-icons e872">delete</span>
                        </div>
                </div>`;
      })
      .join('');
  }

  toggleForm({ open }) {
    if (open) {
      this.$form.classList.add('form-open');
    } else {
      this.$form.classList.remove('form-open');
      this.$form.reset();
    }
  }
}
