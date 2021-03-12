json.user do |json|
  json.id @user.id
  json.email @user.email
end

json.access_token @access_token 