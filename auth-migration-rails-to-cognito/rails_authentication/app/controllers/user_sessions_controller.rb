class UserSessionsController < ApplicationController
  # GET user_sessions/new
  def new
  end

  # POST user_sessions
  def create(email:, password:)
    @user = login(email, password)

    if @user
      redirect_back_or_to(root_path)
    else
      flash.now[:alert] = "サインインに失敗しました。再度お試しください"
      render :new
    end
  end

  # GET user_sessions/destroy
  def destroy
    logout
    redirect_to root_path, notice: 'サインアウトしました'
  end
end
