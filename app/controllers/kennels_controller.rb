class KennelsController < ApplicationController
  before_action :set_kennel, only: [:show, :edit, :update, :destroy]

  # GET /kennels
  # GET /kennels.json
  def index
    @kennels = Kennel.all
  end

  # GET /kennels/1
  # GET /kennels/1.json
  def show
  end

  # GET /kennels/new
  def new
    @kennel = Kennel.new
  end

  # GET /kennels/1/edit
  def edit
  end

  # POST /kennels
  # POST /kennels.json
  def create
    @kennel = Kennel.new(kennel_params)

    respond_to do |format|
      if @kennel.save
        format.html { redirect_to @kennel, notice: 'Kennel was successfully created.' }
        format.json { render :show, status: :created, location: @kennel }
      else
        format.html { render :new }
        format.json { render json: @kennel.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /kennels/1
  # PATCH/PUT /kennels/1.json
  def update
    respond_to do |format|
      if @kennel.update(kennel_params)
        format.html { redirect_to @kennel, notice: 'Kennel was successfully updated.' }
        format.json { render :show, status: :ok, location: @kennel }
      else
        format.html { render :edit }
        format.json { render json: @kennel.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /kennels/1
  # DELETE /kennels/1.json
  def destroy
    @kennel.destroy
    respond_to do |format|
      format.html { redirect_to kennels_url, notice: 'Kennel was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_kennel
      @kennel = Kennel.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def kennel_params
      params.require(:kennel).permit(:kennel_type, :material_cost, :labor_cost, :price, :customer_id)
    end
end
