class DevicesController < ApplicationController
  before_action :set_device, only: [:show, :edit, :update, :destroy, :unlink]

  # GET /devices
  # GET /devices.json
  def index
    @devices = current_user.devices
  end

  # GET /devices/1
  # GET /devices/1.json
  def show
  end

  # GET /devices/new
  def new
    @device = Device.new
  end
  # GET /devices/1/edit
  
  
#This method works only to link a textfield with the current_user_id so when we create a new device the user thinks that he made a new device but what happened really that the user edits in the row that the user enters its id
  def register2
    @device = Device.where(:id => params[:text2].to_i).first
    @device.User_id = current_user.id


    
     if !(@device.User.blank?) then 
    respond_to do |format|
      if @device.save then 
        format.html { redirect_to @device, notice: 'Device was successfully limked with your account.' }
        format.json { render :show, status: :created, location: @device }
      else
        format.html { render :new }
        format.json { render json: @device.errors, status: :unprocessable_entity }
      end
    end
  end
  end 
  # checks that the textfield is empty  or not
  def register_device(device)
     if !(user.blank?) then 
    respond_to do |format|
      if device.save then 
        format.html { redirect_to device, notice: 'device was successfully created.' }
        format.json { render :show, status: :created, location: @device }
      else
        format.html { render :new }
        format.json { render json: device.errors, status: :unprocessable_entity }
      end
    end
  end
  end
  def edit
    @device.User_id = current_user.id
    if !(current_user.blank?) then 
    respond_to do |format|
      if @device.save then 
        format.html { redirect_to @device, notice: 'Device was successfully created.' }
        format.json { render :show, status: :created, location: @device }
      else
        format.html { render :new }
        format.json { render json: @device.errors, status: :unprocessable_entity }
      end
    end
  end
end 

  # POST /devices
  # POST /devices.json
  def create
    @device = Device.new(device_params)

    respond_to do |format|
      if @device.save
        format.html { redirect_to @device, notice: 'Device was successfully created.' }
        format.json { render :show, status: :created, location: @device }
      else
        format.html { render :new }
        format.json { render json: @device.errors, status: :unprocessable_entity }
      end
    end
  end

  def create
    
  else
    render 'new'
  end


  # PATCH/PUT /devices/1
  # PATCH/PUT /devices/1.json
  def update
    respond_to do |format|
      if @device.update(device_params)
        format.html { redirect_to @device, notice: 'Device was successfully updated.' }
        format.json { render :show, status: :ok, location: @device }
      else
        format.html { render :edit }
        format.json { render json: @device.errors, status: :unprocessable_entity }
      end
    end
  end




  # DELETE /devices/1

  # DELETE /devices/1.json
# when we destroy the device it only unlinks the user and the pet from the database
  def destroy
    @device.User = nil
    @device.Register = nil
    @device.save
    respond_to do |format|
      format.html { redirect_to devices_path, notice: 'Device was successfully unlinked.' }
      format.json { head :no_content }
    end
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_device
      @device = Device.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def device_params
      params.require(:device).permit(:User_id, :Register_id)
    end
end
