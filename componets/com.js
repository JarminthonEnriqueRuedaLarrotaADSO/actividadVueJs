export default {
  data() {
    return {
      user: null,
      listar: null,
      mapita: [],
      nombre: '',
      listar1: '',
      numero: null,
      mensaje: 'no se puede enviar un dato vacio',
      limpio: ''
    }
  },
  methods: {
    crearObjeto8() {
      this.user = []
    },
    agregarLista() {
      this.user.push({ nombre: this.listar })
      console.log(this.listar);

    },
    agregarFinalList() {
      this.user.unshift({ nombre: this.listar })
      this.listar1 = ''
    },
    eliminarPrimero() {
      this.user.shift()
    },
    eliminarUltimo() {
      this.user.pop()
    },
    eliminarCualquiera(numero) {
      this.user.splice(numero, 1);
    },
    limpiar() {
      console.log('borrado mi rey');
      this.user = this.limpio
    },
    mapeo() {
      this.mapita = this.user.map((items) => (items.nombre));
    }

  }
}