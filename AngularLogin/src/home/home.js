
<div class="jumbotron">
    <h1>This is home page!</h1>
<p>Everybody can access this page, the other user credentials stored are:</p>
<div ng-repeat="user in users">
    <h2>{{ user.name }}</h2>
<p ng-class="{ 'text-info': user.userRole.title === 'user', 'text-danger': user.userRole.title === 'admin' }">
    username: {{ user.username }}, password: {{ user.password }}, email: {{ user.email }}, permission: {{ user.userRole.title }}
</p>
</div>
</div>



<h2>You can keep track of mocked data and http requests in console</h2>