# frozen_string_literal: true

class Customers::SessionsController < Devise::SessionsController
  
  def new 
    binding.pry
  end

  
  def create
    customer = Customer.new(params)
            .find_by(email: params["customer"]["email"])
            .try(:authenticate, params["customer"]["password"])

    if customer
      session[:customer_id] = customer.id
      render json: {
        status: :created,
        logged_in: true,
        customer: customer
      }
    else
      render json: { status: 401 }
    end
  end
  
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
