import FormSearch from "@/components/FormSearch";
import TableList from "@/components/TableList";
import TablePage from '@/components/TablePage'

export default {
  components:{
    TablePage,
    FormSearch,
    TableList,
  },
  data() {
    return {
      columns: [],
      list: [],
      form: {
        page: 1,
      },
      originForm: {},
      selectedRow: {},
      loading: true,
    };
  },
  methods: {
    enterEvent() {
      this.search(1);
    },
    reset() {
      for (let key in this.originForm) {
        this.form[key] = this.originForm[key];
      }
      this.search(1);
    },
  },
  watch: {
    "form.page"(n, o) {
      if (n != o) {
        this.search(n);
      }
    },
  },
  mounted() {
    this.search(1);
  },
};
