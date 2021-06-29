class CustomersController < ApplicationController
  
  before_action :set_customer, only: [:show, :edit, :update, :destroy]
  

  #admin route will render special page for amin
  def admin 
    @customers = Customer.all
    @associatedInfo = @customers.map{ |cus| {customer: cus, kennel: cus.kennels} } 
    respond_to do |format|
      format.json { render :json => @associatedInfo } 
    end
  end 
  # GET /customers
  # GET /customers.json
  def index
    @customers = Customer.all 
    respond_to do |format|
      format.json { render :json => @customers } 
    
  end
  end

  # GET /customers/1
  # GET /customers/1.json
  def show
  end

  # GET /customers/new
  def new
    @customer = Customer.new
  end

  # GET /customers/1/edit
  def edit
  end

  # POST /customers
  # POST /customers.json
  def create 
    binding.pry
    @customer = Customer.new(customer_params) 
    binding.pry
    if @customer && @customer.authenticate(params[:customer][:password])
    respond_to do |format|
      if @customer.save 
        format.html { redirect_to @customer, notice: 'Customer was successfully created.' }
        format.json { render :show, status: :created, location: @customer }
      else
        format.html { render :new }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end 
end

  # PATCH/PUT /customers/1
  # PATCH/PUT /customers/1.json
  def update
    respond_to do |format|
      if @customer.update(customer_params)
        format.html { redirect_to @customer, notice: 'Customer was successfully updated.' }
        format.json { render :show, status: :ok, location: @customer }
      else
        format.html { render :edit }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /customers/1
  # DELETE /customers/1.json
  def destroy
    @customer.destroy
    respond_to do |format|
      format.html { redirect_to customers_url, notice: 'Customer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def customer_params
      params.require(:customer).permit(:name, :number, :email, :city, :address, :password, :password_confirmation)
    end
end
