import { Component, Vue, Inject } from 'vue-property-decorator';
import { User } from '@/store/auth/user';
import AuthService from '@/store/auth/auth.service';

@Component({
  components: {}
})
export default class Home extends Vue {
  user!: User;
  left: boolean = false;
  constructor() {
    super();
    this.user = AuthService.getUser();
  }
}
