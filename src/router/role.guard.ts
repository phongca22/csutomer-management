import AuthService from '@/store/auth/auth.service';

const RoleGuard = (to, from, next) => {
  console.log(to);
  if (AuthService.hasRole(to.meta.roles)) {
    next();
  } else {
    next('/denied');
  }
  next();
};

export { RoleGuard };
