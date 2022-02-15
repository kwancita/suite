class UsersController < ApplicationController

    def show
        users = User.find(params[:id])
        render json: users
    end

    def create
        user = User.create!(user_params)
        #byebug
        render json: user, status: :created
    end

    def delete
        user = User.find(user_params)
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:full_name, :username, :email, :password_digest)
    end



end
