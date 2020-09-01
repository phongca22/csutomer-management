import { Component, Vue } from 'vue-property-decorator';
import AuthService from '@/store/auth/auth.service';

@Component({
  components: {}
})
export default class LoginPage extends Vue {
  private user: string = '';
  private pass: string = '';

  login() {
    console.log(this.user, this.pass);
    AuthService.login(this.user, this.pass).subscribe((result: boolean) => {
      if (result) {
        this.$router.push('/home');
      }
    });
  }
}
