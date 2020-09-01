import HttpLoader from '@/core/http-loader';
import AuthService from '@/store/auth/auth.service';
import { User } from '@/store/auth/user';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class Home extends Vue {
  user!: User;
  left: boolean = false;
  loading: boolean = false;
  constructor() {
    super();
  }

  created() {
    this.user = AuthService.getUser();
    HttpLoader.event.subscribe((data: boolean) => {
      this.loading = data;
    });
  }

  test() {
    this.http.get('https://5f4db81eeeec51001608ee39.mockapi.io/api/v1/users').subscribe();
  }
}
