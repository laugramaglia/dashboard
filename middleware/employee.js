export default function ({$auth, redirect}){
    const UserRole = $auth
    if(!UserRole.hasScope('employee')) return redirect('/')
}